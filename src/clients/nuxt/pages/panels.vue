<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div v-for="panel in panels" :key="panel.name" class="mx-auto max-w-7xl px-6 lg:px-8 pb-14 ">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 ring-1 ring-gray-900/10 rounded-xl">
        <div class="lg:ml-auto p-4">
          <div class="lg:max-w-lg">
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{panel.name}}</h2>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <Features :panelId="panel.id"/>
            </dl>
          </div>
        </div>
        <div class="flex items-start justify-center order-first">
          <img src="@/assets/images/panel.png" alt="Product screenshot" class="w-[16rem] max-w-none sm:w-[16rem]" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Features from "~/components/Features.vue";

  const {getItems} = useDirectusItems();

  const panels = await getItems({
    collection: 'panels'
  });

  /*const panels = [{
    name:"Black Crystal 375Wp G3",
    features : [
      {
        name: 'Tecnología de media celda',
        description:
            `Panel de alto rendimiento / Mayor rendimiento por superficie`,
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Estilo',
        description: 'Integración perfecta para un acabado full black óptimo',
        icon: LockClosedIcon,
      },
      {
        name: 'Mayor potencia ante cualquier tipo de condición climatológica ',
        description: `Alta eficiencia energética gracias a su rendimiento con escasa luz / Gran resistencia a condiciones ambientales adversas (Arena, ácido, granizo, niebla salina, amoniaco) / Mejor tolerancia a la sombra`,
        icon: ServerIcon,
      },
      {
        name: 'Conector Staübli MC4',
        icon: ServerIcon,
      },
    ],
  },
    {
      name:"Black Crystal 425Wp",
      features : [
        {
          name: 'Tecnología de celdas Tipo-N',
          description:
              '108 medias celdas 182 X 91 mm / Células más potentes / Mejor rendimiento de la superficie',
          icon: CloudArrowUpIcon,
        },
        {
          name: 'Estilo',
          description: 'Integración perfecta para un acabado full black óptimo',
          icon: LockClosedIcon,
        },
        {
          name: 'Mayor potencia ante cualquier tipo de condición climatológica ',
          description: `Alta eficiencia energética gracias a su rendimiento con escasa luz / Gran resistencia a condiciones ambientales adversas (Arena, ácido, granizo, niebla salina, amoniaco) / Mejor tolerancia a la sombra`,
          icon: ServerIcon,
        },
        {
          name: 'Conector Staübli MC4',
          icon: ServerIcon,
        }
      ],
    }]*/
</script>

<style scoped lang="scss">

</style>
