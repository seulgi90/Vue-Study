<script setup>
import { VTreeview } from 'vuetify/labs/VTreeview'
import { onMounted, ref } from 'vue'

const items = ref([]);

// 메인 메뉴
const masterMenu = ref([
  { upMenuId: 'Master', title: 'Master Data', menuId: 'Master' },
  { upMenuId: 'Master test', title: 'Master Data Test', menuId: 'Master test' },
]);

// 서브 메뉴
const menus = ref([
  { upMenuId: 'Master', title: 'System Admin', menuId: 1 },
  { upMenuId: 'Master', title: 'Sample', menuId: 2 },
]);

// 서브 메뉴의 하위 메뉴
const subMenuDetails = ref([
  { upMenuId: 1, title: 'User', menuId: 'A1' },
  { upMenuId: 1, title: 'Program', menuId: 'A2' },
  { upMenuId: 1, title: 'Menu', menuId: 'A3' },
  { upMenuId: 2, title: 'Sample1', menuId: 'B1' },
  { upMenuId: 2, title: 'Sample2', menuId: 'B2' },
  { upMenuId: 2, title: 'Sample3', menuId: 'B3' },
]);

// 서브 메뉴의 하위 메뉴의 data
const subMenuDetailDatas = ref([
  { upMenuId: 'A1', title: 'User', menuId: 'A1-1', comments: 'test'},
]);

const createMenu = () => {
  // 메인 메뉴 추가
  masterMenu.value.forEach(menuItem => {
    const item = {
      id: menuItem.upMenuId,
      title: menuItem.title,
      children: []
    };

    // 서브 메뉴 추가
    const subMenus = menus.value.filter(menu => menu.upMenuId === menuItem.upMenuId);
    subMenus.forEach(subMenu => {
      const subMenuList = {
        id: subMenu.menuId,
        title: subMenu.title,
        children: []
      };

      // 서브 메뉴의 하위 메뉴 추가
      const subsubMenus = subMenuDetails.value.filter(subMenuDetail => subMenuDetail.upMenuId === subMenuList.id);
      subsubMenus.forEach(subsubMenu => {
        subMenuList.children.push({
          id: subsubMenu.menuId,
          title: subsubMenu.title
        });
      });

      item.children.push(subMenuList);
    });

    items.value.push(item);
  });
};

// 메뉴배열 동적
onMounted(() => {
  createMenu();
});

const selected = ref([]);
const real = ref({});
// 서브 메뉴 > 하위 메뉴 > 상세 data
// const fetchData = (item) => {
//
//   selected.value = subMenuDetails.value.filter(data => data.upMenuId === item.children[0].id);  // 하위 메뉴의 upMenuId === 서브메뉴의 menuId
//   real.value = subMenuDetailDatas.value.filter(s => s.menuId === selected.value.id)
// };
const selectItems = ref([]);
</script>

<template>
  <v-card>
    <v-card-title class="indigo white--text headline">
      v-treeview
    </v-card-title>
    <v-layout justify-space-between pa-3>
      <div class="treeview-container" style="width: 30%;">
        <v-treeview
          :items="items"
          v-model:selected="selectItems"
          selectable
          return-object
        >
          <template v-slot:label="{ item }">
            <!-- <div class="treeview-item">{{ item.name }}</div> -->
            <div v-if="item.children" class="treeview-item-children">
              {{ item.name }}
            </div>
            <div v-else class="treeview-item">
              {{ item.name }}
            </div>
          </template>
        </v-treeview>
      </div>
      <div class="text-field-container" style="width: 50%;">
        <v-card class="pt-4 mx-auto" flat max-width="800">
          <v-card-text>
            <div>
              select : {{ selectItems }}
            </div>
            <div class="label-field-container">
              <strong class="label-field" style="width: 120px;">UpMenuId:</strong>
              <v-text-field class="label-field"></v-text-field>
            </div>
            <div class="label-field-container">
              <strong class="label-field" style="width: 120px;">Title:</strong>
              <v-text-field class="label-field"></v-text-field>
            </div>
            <div class="label-field-container">
              <strong class="label-field" style="width: 120px;">MenuId:</strong>
              <v-text-field class="label-field"></v-text-field>
            </div>
            <div class="label-field-container">
              <strong class="label-field" style="width: 120px;">Comments:</strong>
              <v-text-field class="label-field"></v-text-field>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-layout>
  </v-card>
</template>

<style scoped>
.label-field-container {
  display: flex;
  align-items: center;
}

.label-field {
  flex: 0 0 auto;
  width: 200px;
  white-space: nowrap;
  text-align: right;
  margin-right: 10px;
}

.label-field strong {
  display: inline-block;
  width: 120px;
  text-align: left;
}
</style>