import React from 'react';

export default function Hull({ current, rating  }) {
  return <div>hull: { current }/{ rating }</div>
}

/*
<template>
</template>

<script>
export default {
  props: {
    current: { required: true },
    rating: { required: true }
  }
};
</script>

<style scoped></style>
*/
