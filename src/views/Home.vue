<template>
  <div class="home">
    <h1>Homepage</h1>

    <v-btn class="green white--text" depressed>
      <v-icon left>mdi-email</v-icon>
      <span>Email me</span>
    </v-btn>
    <br />
    <br />
    <v-btn small class="green white--text" depressed>
      <v-icon left small>mdi-email</v-icon>
      <span>Email me</span>
    </v-btn>
    <br />
    <br />
    <v-btn large class="green white--text" depressed>
      <span>Email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>
    <br />
    <br />
    <v-btn depressed fab small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <br />
    <br />
    <v-text-field  label="Placeholder" outlined dense></v-text-field>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>
