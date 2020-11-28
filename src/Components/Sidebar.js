import React from 'react'
import '../Styles/Sidebar.css'
import SidebarRow from '../Components/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import { useStateValue } from '../Context/StateProvider';

function Sidebar() {
    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow src= {user.photoURL} 
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon}
            title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon}
            title='Pages' />
            <SidebarRow Icon={PeopleIcon}
            title='Friends' />
            <SidebarRow Icon={ChatIcon}
            title='Messenger' />
            <SidebarRow Icon={StorefrontIcon}
            title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon}
            title='Videos' />
            <SidebarRow Icon={ExpandMoreIcon}
            title='MarketPlace' /> 
        </div>
    )
}

export default Sidebar
