<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Detalle
          </th>
          <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            name: 'Entrada a los lagos de pesca',
            precio: "$ 5.000",
          },
          {
            name: 'Alquiler de caña artesanal',
            precio: "$ 5.000",
          },
          {
            name: 'Carnada de la casa',
            precio: "$ 7.000",
          },
          {
            name: 'Libra de trucha',
            precio: "$ 15.000",
          },
        ],
      }
    },
  }
</script>