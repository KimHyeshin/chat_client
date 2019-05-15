<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout align-center row wrap>
      <v-flex xs2>
        <dialog-group :group-name="group" />
      </v-flex>
      <v-flex xs8 class="display-1">그룹방</v-flex>
      <v-flex xs2>
        <v-btn color="info">에코</v-btn>
      </v-flex>
      <v-flex xs2 class="title">메시지</v-flex>
      <v-flex xs2>
        <v-text-field v-model="group" label="그룹명" />
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="msg" label="메시지를 입력하세요"/>
      </v-flex>
      <v-flex xs2>
        <v-btn color="success" class="title black--text">전송</v-btn>
      </v-flex>

      <v-flex xs12 class="headline">대화록</v-flex>

      <v-flex xs12 text-xs-left>
        <v-card>
          <v-list>
            <template v-for="(msg,i) in arrMsg">
              <v-list-tile :key="i">
                <v-list-tile-content>
                  <v-list-tile-title class="body-1" v-text="msg" />
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="i + 1 < arrMsg.length" :key="`divider-${i}`" />
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    group: '',
    msg: '',
    arrMsg: []
  })
}
</script>

<style scoped>

</style>
