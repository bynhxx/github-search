<template> 
    <div class="spinner" > </div>
</template>
<script>
</script>

<style scoped>

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #ffb266;
    border-top: 4px solid #b9ee74;
    animation: spin 2s linear infinite;
}

</style>