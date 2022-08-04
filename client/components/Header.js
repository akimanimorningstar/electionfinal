import React from 'react';
import { Menu, Button, Search} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
        return (
            <Menu style= {{marginTop: '10px'}}>
            <Menu.Item>
            <Link route='/'>
                <a>
                Election Results 2022
                </a>
            </Link>
            </Menu.Item>
            <Menu.Item>
                <Link route='/admin/addo'>
                    <a>
                    A owner
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link route='/admin/removec'>
                    <a>
                    R Owner
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link route='/admin/removec'>
                    <a>
                    A Admin 
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link route='/admin/removec'>
                    <a>
                    R Admin  
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Menu position= "right">
            <Menu.Item>
                <Link route='/admin/addc'>
                    <a>
                    Add Verifier    
                    </a>
                </Link>
            </Menu.Item> 
            <Menu.Item>
                <Link route='/admin/removec'>
                    <a>
                    Remove Verifier   
                    </a>
                </Link>
            </Menu.Item> 
        <Menu.Item>
                <Link route="/submit/submit">
                <a> 
                <Button primary>
                Submit Results 
                </Button>
                </a>
                </Link>
            </Menu.Item>
        <Menu.Item>
                <Link route="/results/">
                <a> 
                <Button primary>
                Get Raw Results  
                </Button>
                </a>
                </Link>
            </Menu.Item>
            </Menu.Menu>
            </Menu>
    );
}

