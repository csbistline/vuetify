<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="secondary lighten-2" dark v-on="on" text>Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
              required
            ></v-text-field>

            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
              required
            ></v-textarea>

            <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  clearable
                  readonly
                  v-on="on"
                  @click:clear="date = null"
                  :value="computedDateFormattedMomentjs"
                  :rules="dateRules"
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>

            <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import db from "@/fb";
import { log } from "util";

export default {
  data() {
    return {
      date: null,
      dialog: false,
      menu1: false,
      title: "",
      content: "",
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      dateRules: [v => !!v || "Due date is required"],
      loading: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.date).format("Do MMM YYYY"),
          person: "The Net Ninja",
          status: "ongoing"
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded")
          });
      }
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("Do MMM YYYY") : null;
    }
  }
};
</script>

<style scoped>
</style>