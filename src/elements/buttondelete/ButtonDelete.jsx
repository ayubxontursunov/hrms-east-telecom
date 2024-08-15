import PropTypes from 'prop-types'
import './ButtonDelete.css';
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Key from '../../auth/Key';
import { useTranslation } from 'react-i18next';
const Button = ({ onDelete, onView }) => {
    const {t} = useTranslation("global");
    const isAdmin = Key((state) => state.isAdmin);
    return (
        <div className="action_state" id='action_state'>
            <button className='button_view' onClick={onView}><IoEyeOutline className="view_icon" /><strong>{t("documents.read")}</strong></button>
            {isAdmin ? (
                <>
                    <button className='button_delete' onClick={onDelete}><RiDeleteBin6Line className="delete_icon" /><strong>{t("button.delete")}</strong></button>
                </>
            ) : null}
        </div>
    );
};

Button.propTypes={
    onDelete:PropTypes.func,
    onView:PropTypes.func,
}

export default Button;
