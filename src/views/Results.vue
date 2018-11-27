<template>
  <v-data-table
    :headers="headers"
    :items="people"
    hide-actions
    class="elevation-1">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.city }}</td>
      <td class="text-xs-left">{{ props.item.occupation }}</td>
      <td class="text-xs-right">{{ props.item.top1 }}</td>
      <td class="text-xs-right">{{ props.item.top2 }}</td>
      <td class="text-xs-right">{{ props.item.top3 }}</td>
      <td class="text-xs-right">{{ props.item.top4 }}</td>
      <td class="text-xs-right">{{ props.item.top5 }}</td>
    </template>
  </v-data-table>
</template>

<script>
import {mapState} from 'vuex'

const headers = [
  {
    text: 'Imię i nazwisko',
    value: 'name',
    sortable: false
  },
  {
    text: 'Branża',
    value: 'occupation',
    sortable: false
  },
  {
    text: 'Miasto',
    value: 'city'
  },
  {
    text: 'TOP 1',
    value: 'top1',
    align: 'right'
  },
  {
    text: 'TOP 2',
    value: 'top2',
    align: 'right'
  },
  {
    text: 'TOP 3',
    value: 'top3',
    align: 'right'
  },
  {
    text: 'TOP 4',
    value: 'top4',
    align: 'right'
  },
  {
    text: 'TOP 5',
    value: 'top5',
    align: 'right'
  }
]

const Results = {
  data() {
    return {
      headers
    }
  },
  computed: {
    ...mapState(['people'])
  }
}

export default Results
</script>
