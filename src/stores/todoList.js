import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoList = defineStore('todo', () => {
  const todoLists = ref([
    {
      id: 1,
      header: 'Todo',
      list: [
        {
          profile: '',
          name: 'John 1',
          deadLine: '03/4/2024',
          type: 'Todo',
          taskName: null,
          description: null,
          id: 0
        },
        {
          profile:
            'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
          name: 'Joao 2',
          deadLine: '01/04/2024',
          type: 'Todo',
          taskName: null,
          description: null,
          id: 1
        },
        {
          profile:
            'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
          name: 'Jean 3',
          deadLine: '04/24/2024',
          type: 'Todo',
          taskName: null,
          description: null,
          id: 2
        }
      ]
    },
    {
      id: 2,
      header: 'InProgress',
      list: [
        {
          profile:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAABKVBMVEVYsOD///+KXEJDSVX/6L5gNQrV4e3exJJcfYtgKAD/68BTrt9GRElARlKIWT/63aVgMQCLWTxIqt7/8MRVtOc6OkPS6Pbl8vqEVDpAP0aAweY7QU71+v1quOOMWDjs9vvE4fNbg5v13LMpLDuGZVR7dnaYzesxMj6ekX9RTlBWJgCnl4JaLQBEUWCstsJ5gY3H0t612vBgo8lmnL2AbWiIYEqcc1fQsI3ixqDBn36PhXZrZV92bmZeWVfiz6zDr5NfRjb/9OFdY2+IkJzJzNBsdICmqrDj5OZwipuDbl+OUihmkq2ogWNxTytySRxtQQN7RSBfGgBjTUajgFTLqntwTT2CXjhgdXu2kGpNFwBfPCNeUUJdaGeUbkZgPBifoZGvycyPrcNKZXpA6zUmAAAO7ElEQVR4nLWcCVfbSBLHhW3ZIN/3yWEZLMAH2OYwxkcCgXDPhjATNpNkd/P9P8RW6z5a3SXD1Ht5LyDU+ulfXdWlVquFlWDWKLWFuLCkxYV2qRHwgkJAvJqQWxaPWE6obQVDDALY2KoJ8aXl00WMB0QMALhVeyudwVjb+gcAS++EpyOW3hmw3M69G56KmKuV3xGwMVh/VzwVcX2A6ooYwDLWuwXdcIRxlIgIwAEi8QFVfDgc6TYcChjKuDB4B8DNNlc+gBnd7Bzdbh8fh8COj7dvj3buh3zGeLy9+VbAEt+7o5vbu7uNjWw2lQqplkplsxt3d9mD+yEfkRfOHECue4c3R8cb2RDNUhsbtzfgbDYhz81MQHAvB+9geyObouKplt0I7Yx4IrLdzAKE6GW1XBjebG8w6HTG450hR0RmNDMAN9nJrzDaTtF96/J0dvuGHS/xdYaG/oCc8Bju3GHwVMS7I7afWaHiC1hihkdheLSBxCO2cTxiayj4EvoBltj+vd/GyqdZNnTDbC8u+BU4PoBbHL7jYHzg5tDBcoR0QI5/R4H5iIg8QrqXqYBsPmF0x00uNNvYYTXqR0gDLLP9OwzY/0y7u+FkG1o+pABusvPz8GhJPrB7toY1Sj70AjY449vB8nzZbU62aXtrWC/ggM03Ci3VAXXCI3bjcW/l4AHc4jx8vMHBYBs3bMCcJ9m4ATkBItwEGUC8ljrmDHqeQHEBNjh8w7c4WJXwiNk+EDaYgAP2xEbh4G0Cgt3ds4uv3IAFyMnQy6dAy7I8CV352gHIyYDQA9/MF+IlQ3c2dAByMsxbQ1izLHvEc+caO2CJc2bh/q0hQiwVYmdrsBIdsMFzcOENg4jNsgccwHitQQXc4j4B374P4C3vQvEtGmCDh1cYvQceIeQ9iQpCgwLISYHCMjGcqtA6bZY93gmOZGgC8sY4EH4ncJ1/cnpCIcxOeYC2Ec8E5KaYJZJM5TQvP1S8gLf8OZuBG5AvYPBhJBWSJSly6slNvIrBIaGAF/A+oH4goBSJRPKnJ24RNziDiV1CHZBXxRBrBiwUUicyAYxIY3dH5FSFmoQNByBCwMClYGWs8gGh7CLkPN85JBRwgwixgKVW5SFimFtDFKA+nGiAJcwk+U4gwNSJIaBK6ADklVwaYckG2Ma8gAsGWDmz+CBSzuyBggLMtW2AqBeEgeazwMF2wEjEng9RgELOAuSPckEBjQi2nGwPFCTgwATkTUVrFsDFqdDYyQeEp5aE2W3M9eJtAxAxihDDR3Eqdermi0TkB1NCJKA6mhBAfiEYFPAs7+GDSLaOP6IuqJaFAtrDwioWsHLmxXNK+IQDbGuAnNl805p3WP0kr4NJqhkbvTD7Bw6QzP4LqLddQQBBPyofmFHXVNZQFxTWSyogLskA4L8skfzlY/DljUDGApLxWODOB9IAQ94q1CC38Ul5w3Sfy/qdPX5BArYbBBD7Nr2ZMd5mPtj6u4vPzC/AJC8m03OwSWchk19IEe20lPiFW1JrgOsEsIzDA8A1XbfUa8RdQOkHTsZ5A2/eOW+1lGK1Wi0qrVarOu0s5lBdEw0rmS+c13emlQEQmQUJ4C+t96UeOuczGt+DPr5J+XlnprQS55PdDthkmlCKxWJitrsAutiZKH7hTi5oBplQwGZB4mLx8YQo91wFYZ49eKk/J3MVLzJfzJTi+WIuQ+eToCfK88V0r5qA057/PEmnv+6vcebgTMB2QMD9l9hD6jkBVpy5nqAqJ7dFZW86IYrNqq3ZQpasdAj/G0+UKjkRAF8ya6t4QFQxbQLG0i9/kstUJ/NXeySnKg9yZLFHuhyx4q7sStbw4wJETBRv0+nYExqw1hDK6MVszbXuUyyd3ib6Ta2kZkSvFMnLU1WkxN4iT8mF+QUBnKTT6b/WviEBAQ9V7RuAjwD4Ci5WFpJ97K88aNVVfpHQ5KXmaSkChxKnBHD/BzKK4yWhhF5u11wTRQB8CU2rxblkVqCp1MNYF0xaqApWd31Gkr3q7CSmKjhDAuZKAnagUwG70HwsNCaARiqsHJ+axbO0W1QBz2U6YKK6eCUtPHbRgFsCOogLAPhvcv+v8rS10ABTMLTJ1tgmz6rVxB78W9CGY0lOJObEw7FMZg/r4jYekCi4/xXaH0u7rQl5yKiETk5lWzjkF8XEZC5DMFM7obQozuQxNPCyn3lGXhMA0VlGWAUXP0H7srRQzmVJfngYO5NJfgrRDdlvoSRkioRSBw7D+emf3cwH3GAMeSYA4DcIku4LXECaz4gTZVcukeaJ6pyMxfJ5q+MFlOTz4kIiHv4lBgHErwz8QQCJjyORiUJz4q4yNaSaeSWENLg3J4Bfu2LmO3YwXhfWsXyFHxlRFEmqBq2Kytj9XCRB39OCQ5qfKx4JQUBlko+QcYS0gxyM8Xhgf5OGuz+Jj6WJsucqnKXIuS6gGg4kETmt0yI9k5QK0EwGCxjEVEC1F4JGs+Kug1CKdJSqBTUlYeTUN1HsEL6XLmkl0/wHAB9VQFF8SWvXm9gIgc+e/eAGlIlNQ4jshELGl/TLk9pGZvX9+YSMBpgRX0EcqdMqTuZGHOcjHQ3AEqxYnRqHpbwMh6eQk+SXp67WyLd/AHBN1G3/J3nE6CSKe1ChqlXfYlosThw5EQiVvY6sHpY7MzhMXP7Q1ZvIzNCXxaeZLwZg5hcpXqQ5VPKt2WR3Mq22AMYT1NNiS4Gif3KutIp7UP5EpLF5j5m/cdckaQYJWBiZgKL4mlcTBxTy5IGopcy0Yt9JKHfOi+RoqzrbVftj/mXfBPyAu2wQwKZ5+2L3L73r5eeLRaezWLgHFaNnzuFoR302UZGfMpYTkA+e+KGusGoBivvG46/23EGfizEOGM8mUqxrNpBBZmoAxFYz2kBiAD74ELFM+moBYhMhKbeQBWthZgMUf3lmUPl840dbCxncU0luIGxhK+pnO2D3NbCA+Vd7AxlcTQ0VNfaZZPjB0f4TreJjCig/de0N4EpWeCZBPtUVRr/sgOL+K2WWl2mn+/bzM99R0zPwVIecQS/cO/igFwaTUJL/6jobwFSE8fUyemZh1QXYfQ3m4zMXH6pcIDML2LmZmQsw8+ip+JgC/nID/sAAkskjzJtYsA8uQChdAwDmv+67Ts88I8aS+IDMD2LwCqPvbkCxi8+F0th9Mgx2/NfugkDmBzdRgE0PH0iIjRNJ/tn1nL6GGUs20XPUP7yAYvcMCZh/9fJBxcX/pEido0ZFydDTBQmgiHOyNM5QAEX+uwjyqklArVfwZEGd8NH3nYjTwe4I0QC5w7H2noS77JLYNyogbkiWaA4WMaOd/qYJkaqH7ixoXuSFK2H+jKqfyC+51HUVqLedtBjWJeQWDdK463cyT0LjbSd35aXxzE4DFGM8BT0p2kbI6YUlHZD3PrZwv+Z7DTGWpk+nGhb76ndzvGStfYuFWbMw/LDma3/E0kwNY7GvX/zPXvvOWGZmrVlY4RStw1V/OxinYzHffijHYrH/MM5eXWXESa5krZtZ/sP/wjztT0j4Yv9dcpooLtgW9uCn+t2trKuAMZqbVTwAXPLbbn2ZqAaIf93kxBNqg3laI3SFimTwxT63l/q8Oy6U7avf8HP9VgvxXG0L4kzWCWPW+whJkg282HylUW4LwVU0vs7R1w/yU6EHb72t3eJHA5AwyiCkBafyEdvcWg+4x4D5NaWxAhM/2a+dvz4w1+naCT32Uf+jzUEtkIrmanRjDetWkDuMO79YYBB+tP6qsRWko5uL0Q3AABIS7zp3w/Al/Gj/q3KAbUys5fxB1lHrtt6ORqPOT498CB18K9HoAL3bhXcdNVLCgjD6XykapRJ6EB1/sVImZw1qOD7rewhrLT9ikqZQuP8dvjhUAaPOj6O8hHOnfg3trH4TM+WRs74osX2uwZUw3uwlk+H6ZZQi4cpKxIn40XVYOyl6VQ83+Qvla9Z5NkBO6T9s9qphsGSPKiGIKFuILvkgzegC1qGBcHPE3NzAGETcgIy1wIXCUFVPNT8JdUJibjy7gOQew79Z+y/o63+9gH6FayE++h2uhk2rH/oQ6n724mkREo1e6/cYTiZ/j+I+iM5NA/hfhRUEiAyH1Q+idCcTFSMUPMPB0Yuk2QioOKLvbuD/VRi1ZrD51rK+r4QrUdqeCTrfZd3eSDLZa9L4nN/wOr9M9Mxmksjw4IWTRqrxwmzSdNUdfOhpqdpruiVxf37q+rbTPqVeoKunOvla18SN0qDp2jAEpNwqqOhMjO4PeN2f71pOhshIVilwars9nzgp03TV+fr0pkBFW2KMt10nuwGtzzvv6eLpEtLjpEH7pREhV37tJXsWn+czd88X2mb132PwhcNKn+Jkw5dOz+u/u677NlY1gsWRon0AV7SyrTBk8tHHE4PP4WQjQhg3nOwNdT7vdhWUbQy0bNhkA5rjiY3QFND+S8PBB/4CAuGIkgF9AdUhb9hj84W9ydDGZwsew8EKqymtF+bcAeIH2KjluAKChO66q2wDNJ3c4DtYJYRck6vRdgqj7vUBofybC2g5WT9JyyVXl4c2bIPPN4INwN/0fSr8dkvZHLFyjGl9m1oaymGyrlzZsHVVL1kdULXekM7nt9/M5wtuk7YRj5yh/a/fMuN70xKwz3EwWP3GZ2cmvx17Pl8hCOtXZkiYyaRoD2/Dwdy26leffUB89zxCaVjXndwwI7h/qfdBImwZkWG0di78+Bi7Rm3y24WizhhQaGZUqW/Qj7nvVuOgjs81/tbn8SXrB4ydCFk7lzUuw3zCAw7h4QUvw4QvWTslsjen6/MJk5ccPo6A0EuYOzlyds/7FOY6KMnqhtwMWO99YhPw9h9sXPE6opPwstfr4/mS9SveRpjcHRwb1zwRkxcW0mE9aY8bDl89fM3dqBOxB+Ynnog2pL6SrPesn5gDJsjHcS8SEETscZS4MpgOD8K9a4Pvmhli9R5fPiQgEVFhimgj7Jv+Zo7ASQUjHxoQEs4F08+UhM3ig47aR14YvRfw5nWShWhpaPD5+xcauvYf25YFhPLh0ucxnqahv37wrH6Jxgu4Yfbna4aj67ZsE7324wPn4tULDMhGtOVDP77AeCsr/wdUEQpVvdTdYAAAAABJRU5ErkJggg==',
          name: 'Jonny 4',
          deadLine: '02/03/2024',
          type: 'InProgress',
          taskName: null,
          description: null,
          id: 1
        },
        {
          profile:
            'data:image/png;base64,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',
          name: 'Guisepe 5',
          deadLine: '05/04/2024',
          type: 'InProgress',
          taskName: null,
          description: null,
          id: 2
        }
      ]
    },
    {
      id: 3,
      header: 'Review',
      list: [
        {
          profile:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=826&t=st=1713859550~exp=1713860150~hmac=ca10098c2706f884d217309dd18925eb85d7d40a59f899ed49b71bd1b1dc92d5',
          name: 'Jonny 2',
          deadLine: '05/26/2024',
          type: 'Review',
          taskName: null,
          id: 1
        },
        {
          profile:
            'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=826&t=st=1713859578~exp=1713860178~hmac=77ae67c2fff412e4904685086b8b2887e671f2fe80077265c7ee870edea98003',
          name: 'Guisepe 3',
          deadLine: '02/04/2024',
          type: 'Review',
          taskName: null,
          id: 2
        }
      ]
    },
    {
      id: 4,
      header: 'Add section',
      list: []
    }
  ])
  function createNewTaskHeader(taskTypeHeader) {
    todoLists.value.push(
      {
        id: todoLists.value.length,
        header: taskTypeHeader,
        list: []
      },
      { ...todoLists.value.pop() }
    )
  }

  function createNewTask(index, payload) {
    todoLists.value[index].list.push(payload)
  }

  function removeTask(item, index) {
    todoLists.value[index].list = todoLists.value[index].list.filter((data) => {
      console.log(data.name, item.name)
      return data.name !== item.name
    })
  }

  return { todoLists, createNewTaskHeader, createNewTask, removeTask }
})
