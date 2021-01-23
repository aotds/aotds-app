export default async function (node) {
  const { Draggable, Droppable } = (await import('@shopify/draggable')).default;

  const draggable = new Droppable(node.querySelectorAll('.firecon'), {
    draggable: '.weapon',
    dropzone: '.weapons',
  });

  draggable.on(
    'droppable:dropped',
    ({
      data: {
        dragEvent: {
          data: { source },
        },
        dropzone,
      },
    }) => {
      node.dispatchEvent(
        new CustomEvent('assignWeaponToFirecon', {
            detail: {
          weapon_id: source.dataset.weaponId,
          firecon_id: dropzone.dataset.fireconId,
            }})
      );
    }
  );

  return draggable.destroy;
}
