import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableFooter} from 'material-ui/Table';
import Phone from 'material-ui/svg-icons/communication/phone';
import Mail from 'material-ui/svg-icons/communication/email';
import Business from 'material-ui/svg-icons/communication/business';
var ASUColors = require('../styles/asuColors.js');
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
export default class ContactInformation extends React.PureComponent{
    constructor(props){
        super(props);
    }


    render(){
/* <TableBody 
                        stripedRows={false}
                        displayRowCheckbox={false}
                        >
                       
                        </TableBody>*/

        return (<div className={css(styles.ContactContainer)}>
                    <table className={css(styles.ContactTable)}>
                        <tr>
                            <td className={css(styles.tablePicture)}>
                                <Phone color={ASUColors.ASUMaroon}/>
                            </td>
                            <td className={css(styles.tableData)}>{this.props.user.get('phoneNumber')}</td>
                        </tr>
                        <tr>
                            <td className={css(styles.tablePicture)}>
                                <Mail color={ASUColors.ASUMaroon} />
                            </td>
                            <td className={css(styles.tableData)}>{this.props.user.get('email')}</td>
                        </tr>
                        <tr>
                            <td className={css(styles.tablePicture)}>
                                <Business  color={ASUColors.ASUMaroon}/>
                            </td>
                            <td className={css(styles.tableData)}>{this.props.user.get('secondNumber')}</td>
                        </tr>
                    </table>
                </div>);
    }
}