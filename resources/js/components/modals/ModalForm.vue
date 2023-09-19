
<script setup>
import { defineProps } from 'vue';

const { modalTitle, modalModule } = defineProps(['modalTitle', 'modalModule']);

</script>

<template>
    <Transition>
        <div class="modal-overlay" v-if="modalModule.currState()">
            <div class="modal fade show" id="modal-form" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ modalModule.currTitle() }}</h5>
                            <button type="button" class="btn btn-danger btn-sm" @click="modalModule.closeModal()">
                                Close
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
    </Transition>
</template>

<style scoped>
.modal {
    display: block;
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

