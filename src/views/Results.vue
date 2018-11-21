<template>
  <v-data-table
    :headers="headers"
    :items="people"
    class="elevation-1"
  >
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
export default {
  data() {
    return {
      headers: [
        {
          text: 'Imię i nazwisko',
          value: 'name'
        },
        {
          text: 'Miasto',
          value: 'city'
        },
        {
          text: 'Branża',
          value: 'occupation',
          sortable: false
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
      ],
      people: [
        {
          name: 'Damian Ślimak',
          occupation: 'IT, programowanie, przedsiębiorca',
          city: 'Czestochowa',
          top5: 'deliberative',
          top3: 'focus',
          top4: 'harmony',
          top2: 'analytical',
          top1: 'learner'
        },
        {
          name: 'Anna Opyrchał',
          occupation: 'geofizyka, księgowość, inwestowanie w mieszkania',
          city: 'Kraków',
          top2: 'deliberative',
          top5: 'focus',
          top3: 'individualization',
          top4: 'analytical',
          top1: 'learner'
        },
        {
          name: 'Maciej O',
          occupation: 'finanse, doradztwo, dotacje UE',
          city: 'Wrocław',
          top5: 'deliberative',
          top3: 'focus',
          top1: 'harmony',
          top2: 'analytical',
          top4: 'learner'
        },
        {
          name: 'Michał Kufel',
          occupation: 'IT, Programowanie',
          city: 'Bydgoszcz',
          top4: 'deliberative',
          top1: 'discipline',
          top2: 'focus',
          top3: 'harmony',
          top5: 'learner'
        },
        {
          name: 'Kamil',
          occupation: 'IT',
          top4: 'deliberative',
          top3: 'discipline',
          top1: 'focus',
          top5: 'activator',
          top2: 'analytical'
        },
        {
          name: 'Monika Nowa',
          occupation: 'sprzedaż',
          city: 'Warszawa',
          top3: 'achiever',
          top1: 'deliberative',
          top4: 'focus',
          top5: 'harmony',
          top2: 'learner'
        },
        {
          name: 'Michał Gajewski',
          occupation: 'Project Manager, aktualnie w dziale komercyjnym',
          city: 'Warszawa',
          top1: 'deliberative',
          top5: 'focus',
          top4: 'maximizer',
          top2: 'relator',
          top3: 'analytical'
        },
        {
          name: 'Konrad Dulski',
          occupation: 'Elektrotechnika',
          city: 'Gdańsk',
          top1: 'discipline',
          top3: 'focus',
          top4: 'restorative',
          top2: 'analytical',
          top5: 'futuristic'
        },
        {
          name: 'Wiktor Zasowski',
          occupation: 'IT',
          city: 'Wrocław',
          top5: 'deliberative',
          top3: 'harmony',
          top2: 'analytical',
          top4: 'input',
          top1: 'learner'
        }
      ]
    }
  }
}
</script>
