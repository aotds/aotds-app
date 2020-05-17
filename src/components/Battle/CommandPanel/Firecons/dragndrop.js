import { Draggable, Droppable } from '@shopify/draggable';

export default function (node) {
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
        new CustomEvent('assign_weapon_to_firecon', {
            detail: {
          weapon_id: source.dataset.weaponId,
          firecon_id: dropzone.dataset.fireconId,
            }})
      );
    }
  );

  return draggable.destroy;
}
