<template>
  <div>
    <section>
      <div class="form-area">
        <div class="form-input-area">
          <h1 class="center signup-title title-size font">Sign Up</h1>
          <form @submit="signup">
            <div class="field">
              <input
                class="input is-primary is-rounded"
                type="name"
                v-model="firstName"
                placeholder="First Name"
              />
            </div>
            <div class="field">
              <input
                class="input is-primary is-rounded"
                type="name"
                v-model="lastName"
                placeholder="Last Name"
              />
            </div>
            <div class="field">
              <input
                class="input is-primary is-rounded"
                type="email"
                v-model="email"
                placeholder="email"
              />
            </div>
            <div class="field">
              <input
                class="input is-primary is-rounded"
                type="name"
                v-model="userName"
                placeholder="UserName"
              />
            </div>
            <div class="field">
              <input
                class="input is-primary is-rounded"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
            <div class="field">
              <input
                class="input is-primary is-rounded"
                type="password"
                v-model="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <button class="btn btn-success">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions("common", ["setUpUser"]),
    signup(evt) {
      evt.preventDefault();
      if (this.firstName === "") {
        alert("First name must be entered");
      } else if (this.lastName === "") {
        alert("Last name must be entered");
      } else if (this.email === "") {
        alert("Email must be entered");
      } else if (this.userName === "") {
        alert("User name must be entered");
      } else if (this.password === "") {
        alert("Password must be entered");
      } else if (this.password !== this.confirmPassword) {
        alert("Passwords must be the same");
      } else if (this.password.length < 6) {
        alert("Password must be at least 6 characters long");
      } else {
        const payload = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          userName: this.userName,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        this.setUpUser({ payload });
      }
    },
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  margin: 3%;
  background-image: url("../../assets/images/Signup.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.signup-title {
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}

.form-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-input-area {
  background-color: rgb(0, 0, 0, 0.8);
  padding: 15px;
  border-radius: 12%;
}

button {
  margin-top: 10px;
}
</style>
