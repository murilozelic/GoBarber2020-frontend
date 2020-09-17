import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber" />

        <Profile>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGGMMULDjzndg/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=hiiF94g2pw_kFMHnwJjRll6TTrOxaKxgBbtcWaZW9j8"
            alt="Imagem de perfil"
          />

          <div>
            <span>Bem-vindo</span>
            <strong>Murilo Zelic</strong>
          </div>
        </Profile>

        <button type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  </Container>
);

export default Dashboard;
