<template>
  <el-dialog v-model="_visible" 
    :before-close="close"
    title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="newForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="newForm.username" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="modifyEdit">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
  import { reactive, toRefs, watch,computed} from 'vue'
  const props = defineProps<{
    visible: boolean,
    form: {}
  }>()
  const _visible = computed(() => props.visible)

  const state = reactive<{
    formLabelWidth: string;
    newForm: AdminObjItf
  }>({
    formLabelWidth: '120px',
    newForm: {}
  })
  const { formLabelWidth, newForm } = toRefs(state)
  
  watch(() => props.form, () => {
    newForm.value = {...props.form}
  })

  const emit = defineEmits<{
    (event: 'close'): void,
    (event: 'modifyEdit'): void
  }>()

  const close = () => {
    emit('close')
  }

  const modifyEdit = () => {
    emit('modifyEdit')
  }
</script>