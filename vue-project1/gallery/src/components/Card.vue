<template>
  <div class="card shadow-sm">
    <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}"/>
    <div class="card-body">
      <p class="card-text">{{ item.name }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">구입하기</button>
        </div>
        <small class="price text-body-secondary">
          {{ lib.getNumberFormatted(item.price) }}원
        </small>
        <small class="discount badge bg-danger">
          {{ item.discountPer }}%
        </small>
        <small class="real text-danger">
          {{ lib.getNumberFormatted(item.price -(item.price * item.discountPer /100 )) }}%
        </small>
      </div>
    </div>
  </div>
</template>
<script>
import lib from "@/scripts/lib";

export default {
  name: "Card",
  props: {
    item: Object
  },
  setup() {
    return { lib }
  }
}
</script>


<style scoped>
.card .img{
  display: inline-block;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.card .card-body .price {
  text-decoration: line-through;
}

</style>