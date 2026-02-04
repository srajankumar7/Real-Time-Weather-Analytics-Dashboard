<template>
  <div class="search-section">
    <form @submit.prevent="handleSubmit" class="search-form">
      <input
        v-model="cityInput"
        type="text"
        class="search-input"
        placeholder="Enter city name (e.g., London, Tokyo)"
        :disabled="loading"
      />
      
      <button 
        type="submit" 
        class="btn btn-primary"
        :disabled="loading || !cityInput.trim()"
      >
        <i class="fas fa-search"></i>
        Search
      </button>
      
      <button
        v-if="hasData"
        type="button"
        class="btn btn-secondary"
        :disabled="loading"
        @click="handleRefresh"
      >
        <i class="fas fa-sync-alt"></i>
        Refresh
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SearchBar',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    hasData: {
      type: Boolean,
      default: false
    }
  },
  emits: ['search', 'refresh'],
  setup(props, { emit }) {
    const cityInput = ref('');
    
    const handleSubmit = () => {
      const city = cityInput.value.trim();
      if (city) {
        emit('search', city);
      }
    };
    
    const handleRefresh = () => {
      emit('refresh');
    };
    
    return {
      cityInput,
      handleSubmit,
      handleRefresh
    };
  }
};
</script>
