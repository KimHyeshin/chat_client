<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout align-center row wrap>
      <template v-if="login">
        <v-flex
          xs12
          class="display-1"
        >
          All Chat
        </v-flex>
        <v-flex
          xs2
          class="title"
        >
          message
        </v-flex>
        <v-flex xs8>
          <v-text-field v-model="msg" label="메시지를 입력하세요" />
        </v-flex>
        <v-flex xs2>
          <v-btn
            color="success"
            class="title black--text"
          >
            전송
          </v-btn>
        </v-flex>
      </template>
      <template v-else>
        <v-flex
          xs12
          class="display-1"
        >
          All Chat Enter
        </v-flex>
        <v-flex
          xs2
          class="title"
        >
          Name
        </v-flex>
        <v-flex xs8>
          <v-text-field v-model="username" label="이름을 입력하세요" />
        </v-flex>
        <v-flex xs2>
          <v-btn
            color="success"
            class="title black--text"
          >
            입장
          </v-btn>
        </v-flex>
      </template>

      <v-flex
        xs12
        class="headline"
      >
        Chat Room
      </v-flex>

      <v-flex xs12 text-xs-left>
        <v-card>
          <v-list>
            <template v-for="(msg,i) in arrMsg">
              <v-list-item :key="i">
                <v-list-item-content>
                  <v-list-item-title class="body-1" v-text="msg" />
                </v-list-item-content>
              </v-list-item>
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
  name: 'All',
  data: () => ({
    username: '',
    login: false,
    msg: '',
    arrMsg: []
  })
}
</script>

<style scoped>

</style>
