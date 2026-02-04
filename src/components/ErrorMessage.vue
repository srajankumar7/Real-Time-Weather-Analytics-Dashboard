<template>
  <div class="error">
    <strong><i class="fas fa-exclamation-circle"></i> Error:</strong> {{ message }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>
