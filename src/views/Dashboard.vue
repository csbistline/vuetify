<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text mt-1">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn class="grey lighten-3 ml-4" small text v-on="on" @click="sortBy('title')">
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn class="grey lighten-3 ml-2" small text v-on="on" @click="sortBy('person')">
              <v-icon small left>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>

      <v-card flat v-for="project in projects" :key="project.id">
        <v-row :class="`pa-3 ml-0 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="float-right">
              <v-chip
                small
                class="v-chip--active white--text caption my-2"
                :color="project.status"
              >{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #008000;
}
.project.ongoing {
  border-left: 4px solid #ffa500;
}
.project.overdue {
  border-left: 4px solid #ff6347;
}
.v-chip.complete {
  background: #008000;
}
.v-chip.ongoing {
  background: #ffa500;
}
.v-chip.overdue {
  background: #ff6347;
}
</style>
