import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

export default function SignedIn(signOut) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.pinimg.com/236x/ce/d1/5a/ced15aba811c18406de4d27ec06f381b.jpg"
        />
        <Dropdown pointing="top left" text="Yasemin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
