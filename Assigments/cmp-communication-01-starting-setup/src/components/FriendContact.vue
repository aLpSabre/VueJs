<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "Favorite" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  /*   props: ["name", "phoneNumber", "emailAdress"], */
  props: {
    id: {
      type: String,
      requeired: true,
    },
    name: {
      type: String,
      requeired: true,
    },
    phone: {
      type: String,
      requeired: true,
    },
    email: {
      type: String,
      requeired: true,
    },
    isFavorite: {
      type: Boolean,
      requeired: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite",this.id);
    },
  },
};
</script>
