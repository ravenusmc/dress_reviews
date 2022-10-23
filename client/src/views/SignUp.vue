<template>
  <div>
    <section>
      <Form />
    </section>
  </div>
</template>

<script>
import Form from '@/components/signup/Form.vue';
export default {
  name: 'SignUp',
  components: {
    Form,
  },
};
</script>

<style scoped>
/* section {
  height: 95vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media only all and (max-width: 900px) {
  section {
    grid-template-columns: 1fr;
  }
  .pictures {
    display: none;
  }
} */
</style>