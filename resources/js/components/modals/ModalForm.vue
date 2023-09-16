
<script setup>
import { defineProps } from 'vue';

const { modalTitle, modalModule } = defineProps(['modalTitle', 'modalModule']);

</script>

<template>
    <div class="modal-overlay" v-if="modalModule.currState()">
        <div class="modal fade show" id="modal-form" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ modalModule.currTitle() }}</h5>
                        <button type="button" class="close" @click="modalModule.closeModal()" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                        <button @click="modalModule.closeModal()">Close Modal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    display: block;
    overflow-y: auto;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    align-items: center;
    justify-content: center;
}
</style>

