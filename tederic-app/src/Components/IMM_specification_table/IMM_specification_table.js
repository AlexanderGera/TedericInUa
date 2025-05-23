import styles from './IMM_specification_table.module.scss';
import {useNavigationType} from "react-router-dom";

// import {IMM_TECH_TABLE} from "../../Data";

export default function IMM_specification_table(props) {
    let {
        diameter,
        ld,
        inj_vol,
        inj_weight,
        inj_air,
        inj_air_acc,
        inj_press,
        screw_stroke,
        screw_speed,
        clamp_force,
        clamp_stroke,
        space_bar,
        max_mold_height,
        min_mold_height,
        ejector_stroke,
        ejector_force,
        number_pins,
        max_pump_press,
        pump_motor_pow,
        heater_pow,
        hopper_cap,
        oil_tank_cap,
        dimension,
        weight
    } = props;

    let imm_tech_table = [
        {
            characteristics: 'Характеристики',
            item: 'Единица измерения',
            varA: 'A',
            varB: 'B',
            varC: 'C',
        },
        {
            title: 'Узел впрыска',
            units: {
                diametr: ['Диаметр', 'мм', {...diameter}],
                ld: ['Отношение длины шнека к диаметру', 'L/D', {...ld}],
                inj_vol: ['Теор. объем впрыска', 'см.куб', {...inj_vol}],
                inj_weight: ['Вес впрыска(Ps)', 'г', {...inj_weight}],
                inj_air: ['Скорость впрыска в воздух', 'см.куб/сек', {...inj_air}],
                inj_air_acc: ['Скорость выпрыска с аккумулятором', 'см.куб/сек', {...inj_air_acc}],
                inj_press: ['Давление впрыска', 'бар', {...inj_press}],
                screw_stroke: ['Ход шнека', 'мм', screw_stroke],
                screw_speed: ['Скорость вращения шнека', 'об/мин', screw_speed],
            },
        },
        {
            title: 'Узел смыкания',
            units: {
                clamp_force: ['Усилие смыкания', 'кН', clamp_force],
                clamp_stroke: ['Ход плиты', 'мм', clamp_stroke],
                space_bar: ['Расстояние между колоннами', 'мм', space_bar],
                max_mold_height: ['Макс. высота прессформ', 'мм', max_mold_height],
                min_mold_height: ['Мин. высота прессформ', 'мм', min_mold_height],
                ejector_stroke: ['Ход выталкивателя', 'мм', ejector_stroke],
                ejector_force: ['Сила выталкивателя', 'кН', ejector_force],
                number_pins: ['Кол-во выталкивателей', 'шт', number_pins],
            },
        },
        {
            title: 'Другое',
            units: {
                max_pump_press: ['Макс. давление насоса', 'МПа', max_pump_press],
                pump_motor_pow: ['Мощность насоса', 'кВт', pump_motor_pow],
                heater_pow: ['Мощность нагревателей', 'кВт', heater_pow],
                hopper_cap: ['Объем загрузочного бункера', 'кг', hopper_cap],
                oil_tank_cap: ['Вместимость масляного бака', 'л', oil_tank_cap],
                dimension: ['Размеры (Д х Ш х В)', 'м', dimension],
                weight: ['Вес', 'т', weight],
            },
        },
    ];

    let checkIfIsObject = (value) => {
        if (typeof value === 'number' || typeof value === 'string') {
            return <td colSpan={3}>{value}</td>
        } else if (typeof value === 'object' && !Array.isArray(value)) {
            return Object.values(value).map((item, index) => (
                <td key={index}>{item}</td>
            ))
        }
    }


    return (
        <table className={styles}>
            <tbody>
            <tr>
                {Object.keys(imm_tech_table[0]).map((headers, item) => (

                    item === 0 ? <td colSpan={2}>{imm_tech_table[0][headers]}</td> :
                        <td>{imm_tech_table[0][headers]}</td>

                ))}
            </tr>
            {imm_tech_table.slice(1).map((block, blockIndex) => {
                return Object.keys(block.units).map((key, index) => {

                    const [name, data, values] = block.units[key];

                    return (
                        <tr key={blockIndex}>
                            {index === 0 && <td rowSpan={Object.keys(block.units).length}>{block.title}</td>
                            }
                            <td>{name}</td>
                            <td>{data}</td>
                            {checkIfIsObject(values)}
                        </tr>
                    );
                })
            })}
            </tbody>
        </table>
    );
}