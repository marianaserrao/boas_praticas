//IMPORTS
//lib
import React, { FormEvent, useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import Modal from 'react-modal';
import { FiTrash2, FiX } from "react-icons/fi";

//services
import api from '../../services/api';

//utils
import global_function from '../../utils';

//hooks
import { useAuth } from '../../hooks/auth';

//images
import logo from '../../assets/images/shared'

//components
import ComponentName from '../../components/ComponentName'

//styled-components
import {
    Container
} from './styles'

//INTERFACES
//imports
import Interface from '../../interfaces/Interface'

//new
interface ComponentProps {
    param1: string;
    param2: number;
}

//COMPONENT
const NossoComponente: React.FC<ComponentProps> = ({ param1, param2 }) => {
    //estados
    const [state, setState] = useState('');

    //hooks
    //hooks de lib
    const { goBack } = useHistory();

    //hooks react
    useEffect(() => {

    }, [])

    //funcoes
    const handleSomething = useCallback(() => {

    }, [])

    //constantes
    const modifiedSomething = useMemo(() => { }, []);
    const inputRef = useRef<HTMLInputElement>(null)

    //animacoes (react-native)

    //return
    return (
        <Container></Container>
    )

    //EXPORT
    export default Component;