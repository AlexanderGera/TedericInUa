

let EQUIPMENT_LIST = [
    {
        title: 'Термопластавтоматы',
        items: [
            {
                name: 'Стандартная серия',
                key: 'standard_series',
                link: '/equipment/imm/standard_series'
            },
            {
                name: 'PVC серия',
                key: 'pvc_series',
                link: '/equipment/imm/pvc_series'
            },
            {
                name: 'PET серия',
                key: 'pet-series',
                link: '/equipment/imm/pet_series'
            },
            {
                name: 'F серия',
                key: 'f-series',
                link: '/equipment/imm/f_series'
            },
        ]
    },
    {
        title: 'Вспомогательное оборудование',
        items: [
            {
                name: 'Дробилки',
                key: 'crushers',
                link: '/equipment/additional_equipment/crushers'
            },
            {
                name: 'Автозагрузчики',
                key: 'loaders',
                link: '/equipment/additional_equipment/loaders'
            },
            {
                name: 'Бункеры-осушители',
                key: 'dryers',
                link: '/equipment/additional_equipment/dryers'
            },
            {
                name: 'Миксеры',
                key: 'mixers',
                link: '/equipment/additional_equipment/mixers'
            },
            {
                name: 'Контроллеры температуры',
                key: 'temperature-controllers',
                link: '/equipment/additional_equipment/temperature-controllers'
            },
        ],
    },
    {
        title: 'Холодильное оборудование',
        items: [
            {
                name: 'Градирни',
                key: 'cooling-towers',
                link: '/equipment/cooling_equipment/cooling-towers'
            },
            {
                name: 'Холодильники',
                key: 'refrigerators',
                link: '/equipment/cooling_equipment/refrigerators'
            },
        ],
    },
    {
        title: 'Услуги',
        items: [
            {
                key: 'services',
                link: '/services'
            }
        ],
    }
];

let IMM_TECH_TABLE = [
    {
        unit: 'Единица измерения',
        varA: 'A',
        varB: 'B',
        varC: 'C',
    },
    {
        injection_unit: 'Узел впрыска',
        units: {
            diametr: ['Диаметр', 'мм', { a: 25, b: 28, c: 32 }],
            ld: ['Отношение длины шнека к диаметру', 'L/D', { a: 22.4, b: 20, c: 17.5 }],
            inj_vol: ['Теор. объем впрыска', 'см.куб', { a: 68, b: 85, c: 111 }],
            inj_weight: ['Вес впрыска(Ps)', 'г', { a: 62, b: 77, c: 101 }],
            inj_air: ['Скорость впрыска в воздух', 'см.куб/сек', { a: '46/68', b: '58/86', c: '76/112' }],
            inj_air_acc: ['Скорость выпрыска с аккумулятором', 'см.куб/сек', { a: '208', b: '262', c: '342' }],
            inj_press: ['Давление впрыска', 'бар', { a: 2356, b: 1878, c: 1438 }],
            srew_stroke: ['Ход шнека', 'мм', 139],
        },
    }
];


export { EQUIPMENT_LIST, IMM_TECH_TABLE };