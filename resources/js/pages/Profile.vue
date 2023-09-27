<template>
  <span>search value: </span>
  <input type="text" v-model="searchValue">

  <EasyDataTable v-model:items-selected="itemsSelected" show-index fixed-index fixed-checkbox fixed-column
    :checkbox-column-width="40" :headers="headers" :items="items" :loading="loading" :search-value="searchValue">
    <template #expand="item">
      <div>
        {{ item.player }} won championships in asdas
      </div>
    </template>

    <template #item-player="{ player, avator, page }">
      <div class="player-wrapper">
        <img class="avator" :src="avator" alt="" />
        <a target="_blank" :href="page">{{ player }}</a>
      </div>
    </template>

    <template #item-team="{ teamName, teamUrl }">
      <a target="_blank" :href="teamUrl">{{ teamName }}</a>
    </template>

    <template #item-action="item">
      <div class="operation-wrapper">
        <i class="fas fa-edit" @click="editItem(item)"></i>
        <br/>
        <i class="fas fa-trash" @click="deleteItem(item)"></i>
      </div>
    </template>

  </EasyDataTable>

  <div class="edit-item" v-if="isEditing">
    height:<input type="text" v-model="editingItem.height" />
    <br />
    weight:<input type="text" v-model="editingItem.weight" />
    <br />
    <button @click="submitEdit">ok</button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const searchField = ref("");
const searchValue = ref("");

const headers = [
  { text: "PLAYER", value: "player", fixed: true, width: 200 },
  { text: "TEAM", value: "teamName" },
  { text: "NUMBER", value: "number" },
  { text: "POSITION", value: "position" },
  { text: "HEIGHT", value: "info.height" },
  { text: "WEIGHT (lbs)", value: "info.weight", sortable: true },
  { text: "LAST ATTENDED", value: "lastAttended" },
  { text: "COUNTRY", value: "country" },
  { text: "ACTION", value: "action" },
];

const itemsSelected = ref([]);
const items = ref([]);
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
  items.value = [
    {
      id: 1,
      player: "Stephen Curry",
      page: "https://www.nba.com/player/201939/stephen-curry",
      avator:
        "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/Stephen.png?raw=true",
      teamName: "GSW",
      teamUrl: "https://www.nba.com/team/1610612744/warriors",
      number: 30,
      position: "G",
      info: {
        height: "6-2",
        weight: 185,
      },
      lastAttended: "Davidson",
      country: "USA",
    },
    {
      id: 2,
      player: "Lebron James",
      page: "https://www.nba.com/player/2544/lebron-james",
      avator:
        "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/lebron.png?raw=true",
      teamName: "LAL",
      teamUrl: "https://www.nba.com/team/1610612747/lakers",
      number: 6,
      position: "F",
      info: {
        height: "6-9",
        weight: 250,
      },
      lastAttended: "St. Vincent-St. Mary HS (OH)",
      country: "USA",
    },
    {
      id: 3,
      player: "Kevin Durant",
      page: "https://www.nba.com/player/201142/kevin-durant",
      avator:
        "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/Kevin.png?raw=true",
      teamName: "BKN",
      teamUrl: "https://www.nba.com/team/1610612751/nets",
      number: 7,
      position: "F",
      info: {
        height: "6-10",
        weight: 240,
      },
      lastAttended: "Texas-Austin",
      country: "USA",
    },
    {
      id: 4,
      player: "Giannis Antetokounmpo",
      page: "https://www.nba.com/player/203507/giannis-antetokounmpo",
      avator:
        "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/Giannis.png?raw=true",
      teamName: "MIL",
      teamUrl: "https://www.nba.com/team/1610612749/bucks",
      number: 34,
      position: "F",
      info: {
        height: "6-11",
        weight: 242,
      },
      lastAttended: "Filathlitikos",
      country: "Greece",
    },
  ];
}, 2000);

const isEditing = ref(false);
const editingItem = reactive({
  height: "",
  weight: "",
  id: 0,
});

const deleteItem = (val) => {
  items.value = items.value.filter((item) => item.id !== val.id);
};

const editItem = (val) => {
  isEditing.value = true;
  const { height, weight, id } = val;
  editingItem.height = height;
  editingItem.weight = weight;
  editingItem.id = id;
};

const submitEdit = (val) => {
  isEditing.value = false;
  const item = items.value.find((item) => item.id === editingItem.id);
  item.height = editingItem.height;
  item.weight = editingItem.weight;
};
</script>

<style>
.avator {
  margin-right: 10px;
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
}
</style>
