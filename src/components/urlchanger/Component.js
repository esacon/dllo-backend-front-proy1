import React from 'react'
import "./style.scss"
import {Input} from "../input";
import {useDispatch, useSelector} from "react-redux";
import {getUrl, loadURL, setURL} from "../../services/apiSlice";

const Component = () => {
    const [formData, setFormData] = React.useState({url: "https://cadito-api.herokuapp.com/"})
    const dispatch = useDispatch()
    const API_URL = useSelector(getUrl)

    React.useEffect(() => {
        dispatch(loadURL())
    }, [])

    React.useEffect(() => {
        if (API_URL) {
            setFormData({url: API_URL})
        }
    }, [API_URL])

    const onChange = (url) => {
        setFormData({url})
        dispatch(setURL(url))
    }

    return <></>
}

export default Component