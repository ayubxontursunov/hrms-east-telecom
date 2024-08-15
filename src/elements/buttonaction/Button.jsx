import PropTypes from 'prop-types'
import './button.css';
import { MdEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Key from '../../auth/Key';
import { useTranslation } from 'react-i18next';
const Button = ({ onDelete, onEdit, onView }) => {
    const isAdmin = Key((state) => state.isAdmin);
    const {t} = useTranslation("global");
    return (
        <div className="action_state">
            <button className='button_view' onClick={onView}><IoEyeOutline className="view_icon" /><strong>{t("button.view")}</strong></button>
            {isAdmin ? (
                <>
                    <button className='button_edit' onClick={onEdit}><MdEdit className="edit_icon" /><strong>{t("button.edit")}</strong></button>
                    <button className='button_delete' onClick={onDelete}><RiDeleteBin6Line className="delete_icon" /><strong>{t("button.delete")}</strong></button>
                </>
            ) : null}
        </div>
    );
};

Button.propTypes={
    onDelete:PropTypes.func,
    onEdit:PropTypes.func,
    onView:PropTypes.func,
}

export default Button;
