import {Link} from "react-router-dom";

import styles from './Home.module.scss';
import '../../../index.scss';

import Header from "../../Header/Header";
import Main from "../../Main/Main";
import LeftAsideColumn from "../../LeftAsideColumn/LeftAsideColumn";
import LeftMenuColumn from "../../LeftMenuColumn/LeftMenuColumn";
import LeftAsideTitleBlock from "../../LeftAsideTitleBlock/LeftAsideTitleBlock";
import Banner from "../../Banner/Banner";

import IMM_NewMachine from "../../../assets/img/imm/D160.jpg";
import Crusher from "../../../assets/img/crushers/Strong crusher.png";
import NewEquipmentBlock from "../../New Equipment Block/NewEquipmentBlock";
import IMM_specification_table from "../../IMM_specification_table/IMM_specification_table";


export default function Home() {
    return (
        <>
            <Header/>
            <div className="content_wrapper">
                <LeftAsideColumn>
                    <LeftAsideTitleBlock text="Оборудование"/>
                    <LeftMenuColumn/>
                    <LeftAsideTitleBlock text="Статьи"/>
                </LeftAsideColumn>
                <Main>

                    <Banner/>
                    <section className={styles.home__introText}>
                        <article>
                            <h2 className="regular_text_title">Добро пожаловать на сайт компании Тедерик
                            </h2>
                            <p>Более чем двадцать лет наша компания занимается производством изделий из пластмасс
                                методом литья под давлением.</p>
                            <p>Мы первые кто освоили производство бутылей из полиэтилентерефталата большого объма в
                                Украине</p>
                            <p>Благодаря накопленному опыту эксплуатации термопластавтоматов, мы стали
                                представителем
                                компании Tederic в Украине</p>
                            <p>Специалисты нашей компании, оказывают полный спектр услуг по планированию
                                производства,
                                подбору и доставки необходимого оборудования, а также запуск производства в
                                эксплуатацию
                                и полное техническое гарантийное и после гарантийное обслуживание </p>
                        </article>
                    </section>
                    <NewEquipmentBlock
                        pictureName={IMM_NewMachine}
                        altName="D160"
                        title="Новый термопластавтома TEDERIC TRX-160D с сервомотором"
                        text="Снижение энергопотребления на 30%"
                        address="#"
                        // newClass="reverse"
                    />
                    <NewEquipmentBlock
                        pictureName={Crusher}
                        altName="D160"
                        title="Дробилка повышенной производительности SML SG-300F"
                        text="Повышенная производительност на 10%"
                        address="#"
                        newClass="reverse"
                    />
                    <IMM_specification_table
                        diameter={{a: 25, b: 28, c: 32}}
                        ld={{a: 22.4, b: 20, c: 17.5}}
                        inj_vol={{a: 68, b: 85, c: 111}}
                        inj_weight={{a: 62, b: 77, c: 101}}
                        inj_air={{a: '46/68', b: '58/86', c: '76/112'}}
                        inj_air_acc={{a: '208', b: '262', c: '342'}}
                        inj_press={{a: 2356, b: 1878, c: 1438}}
                        screw_stroke={139}
                        screw_speed={'0 ~ 206 / 0 ~ 307'}
                        clamp_force={600}
                        clamp_stroke={300}
                        space_bar={'320 Х 320'}
                        max_mold_height={320}
                        min_mold_height={100}
                        ejector_stroke={100}
                        ejector_force={38}
                        number_pins={5}
                        max_pump_press={16}
                        pump_motor_pow={"7,5 / 11,00"}
                        heater_pow={6}
                        hopper_cap={25}
                        oil_tank_cap={160}
                        dimension={'4.0 /1 / 1.7'}
                        weight={2.5}


                    />
                </Main>
            </div>

        </>
    );
}