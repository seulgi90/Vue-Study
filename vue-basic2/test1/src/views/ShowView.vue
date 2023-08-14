<template>
  <div class="show">
    <h1>This is an show page</h1>
    <SlotEx>
      <div>slot 사용법</div>
      <div>컴포넌트 내 원하는 위치에 slot태그 삽입</div>
      <div>사용할 컴포넌트 위치로와서 컴포넌트 태그 사이에 div 태그 이용</div>
      <div>여기서 작성된 데이터가 해당 컴포넌트 slot 태그로 들어간다</div>
    </SlotEx>
    <hr>
    <hr>
    <SlotEx2>
      <template v-slot:header>
        <p>여러개의 slot 사용법</p>
      </template>

      <template v-slot:body>
        <p>슬롯별 template를 만들고 컴포넌트에서 지정한 slot의 name값을 넣어준다</p>
        <p>v-slot:name값 </p>
        
      </template>

      <template v-slot:footer>
        <p>footer 영역 slot</p>
      </template>

      <template v-slot:default>
        slot에 아무것도 입력안했을 떄 
      </template>

      <template #sharp>
        <p>v-slot: 을 '#' 으로 줄여 쓰기 가능</p>
      </template>
      
    </SlotEx2>
    <SlotEx3>
      <template #header="props">
        <p>방법1</p>
        <p>#header="원하는 명으로 작성"</p>
        <p> {{ props.title }} </p>
        <p> 변수명.컴포넌트에서 설정한 속성값으로 작성하여 불러오기 </p>
      </template>

      <template #body="{ title }">
        <p>방법2</p>
        <p> {{ title }} </p>
        <p>#body="{ 컴포넌트에서 설정한 속성값 }"</p>
      </template>

    </SlotEx3>
  </div>
</template>

<script>
import SlotEx from '../components/SlotEx.vue';
import SlotEx2 from '../components/SlotEx2.vue';
import SlotEx3 from '../components/SlotEx3.vue';

export default {
  components: {
    SlotEx,
    SlotEx2,
    SlotEx3
  }
}
</script>