import { Fragment, useState, useEffect } from "react";
import Button from "./Button";
import { formatearDinero, calcularTotal } from "../helpers";

const Form = ({cantidad, setCantidad, plazo, setPlazo}) => {

    const [total, setTotal] = useState(0);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    useEffect(() => {
        setTotal(calcularTotal(cantidad,plazo));
    },[cantidad,plazo]);

    const handleClickDecremento = () => {
        const valor = cantidad - STEP;

        if( valor < MIN ) return;

        setCantidad(valor);
    }

    const handleClickIncremento = () => {
        const valor = cantidad + STEP;

        if( valor > MAX ) return;

        setCantidad(valor);
    }

    return ( 
        <Fragment>

            <div className="flex justify-between my-6">
                <Button
                    operador="-"
                    fn={handleClickDecremento}
                />

                <Button
                    operador="+"
                    fn={handleClickIncremento}
                />
            </div>
            
            <input type="range" 
                name="" 
                id="" 
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                onChange={e => setCantidad(+e.target.value)}
                value={cantidad}
                min={MIN}
                max={MAX}
                step={STEP}
            />

            <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formatearDinero(cantidad)}</p>

            <h2 className="text-center my-10 text-5xl font-extrabold text-gray-600">
                Elige un <span className="text-indigo-500"> plazo </span>para pagar
            </h2>

            <select 
                name=""
                id=""
                className="text-xl p-2 font-bold text-gray-500 text-center w-full mt-5 border-2 border-gray-200 rounded-lg"
                onChange={e => setPlazo(+e.target.value)}
                value={plazo}
            >
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
            </select>

            <div className="my-5 bg-gray-50 p-5" >
                <h2 className="text-center my-10 text-5xl font-extrabold text-gray-600">
                    Resumen <span className="text-indigo-500"> de pagos </span>
                </h2>

                <p className="text-xl text-gray-500 text-center font-bold">Meses: {plazo}</p>
                <p className="text-xl text-gray-500 text-center font-bold">Total a pagar: {formatearDinero(total)}</p>
                <p className="text-xl text-gray-500 text-center font-bold">Mensualidades: {formatearDinero(total / plazo)} </p>
            </div>

        </Fragment>
    );
}
 
export default Form;