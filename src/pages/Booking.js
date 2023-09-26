
import { useFormik } from "formik";
import * as Yup from "yup";
import { useModal } from "../context/ModalContext";
const Booking = () => {
    const bookingSchema = Yup.object({
        "res-date": Yup.string().required(),
        "res-time": Yup.string().required(),
        "guests": Yup.number().min(1).max(10).required(),
        "occasion": Yup.string().required()

    })

    const { setIsOpen } = useModal()

    const formik = useFormik({
        initialValues: {
            "res-date": "",
            "res-time": "17:00",
            "guests": 1,
            "occasion": "Birthday"

        },
        validationSchema: bookingSchema,
        onSubmit: values => {
            console.log(values)
            setIsOpen(true)
        }
    })
    return (
        <main>
            <div className="bg-[#495E57]">
                <div className='mx-auto max-w-7xl  p-4 sm:p-6 lg:p-8'>
                    <h1 className='text-[#F4CE14] text-3xl lg:text-5xl my-5'>Reservation</h1>
                    <div>
                        <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
                            <div className=" grid md:grid-cols-2 gap-5 place-items-center">
                                <div className="md:m-5">
                                    <div> <label htmlFor="res-date" className="text-white text-lg">Choose date</label></div>
                                    <input type="date" id="res-date" name="res-date" className="my-2 p-3 w-64 sm:w-80 lg:w-96 max-w-sm rounded" onChange={formik.handleChange} />
                                    {formik.errors["res-date"] ? <div className="text-red-500">{formik.errors["res-date"]}</div> : null}
                                </div>
                                <div className="md:m-5">
                                    <div><label htmlFor="res-time" className="text-white text-lg">Choose time</label></div>
                                    <select id="res-time" name="res-time" className="my-2 p-3 w-64 sm:w-80 lg:w-96 max-w-sm rounded" onChange={formik.handleChange} value={formik.values.time}>
                                        <option>17:00</option>
                                        <option>18:00</option>
                                        <option>19:00</option>
                                        <option>20:00</option>
                                        <option>21:00</option>
                                        <option>22:00</option>
                                    </select>
                                    {formik.errors["res-time"] ? <div className="text-red-500">{formik.errors["res-time"]}</div> : null}
                                </div>
                                <div className="md:m-5">
                                    <div><label htmlFor="guests" className="text-white text-lg ">Number of guests</label></div>
                                    <input type="number" name="guests" placeholder="1" min={1} max={10} id="guests" className="my-2 p-3 w-64 sm:w-80 lg:w-96 max-w-sm rounded" onChange={formik.handleChange} value={formik.values.guests} />
                                    {formik.errors.guests ? <div className="text-red-500">{formik.errors.guests}</div> : null}
                                </div>
                                <div className="md:m-5">
                                    <div><label htmlFor="occasion" className="text-white text-lg">Occasion</label></div>
                                    <select name="occasion" id="occasion" className="my-2 p-3 w-64 sm:w-80 lg:w-96 max-w-sm rounded">
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                    </select>
                                    {formik.errors.occasion ? <div className="text-red-500">{formik.errors.occasion}</div> : null}
                                </div>
                            </div>
                            <input type="submit" value="Make Your reservation" className="my-4 p-4 rounded-md bg-[#F4CE14] w-64 sm:w-80 lg:w-96 max-w-lg text-white text-lg hover:cursor-pointer" />
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Booking