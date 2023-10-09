import devs from '../../images/devs.png';
import { Link } from 'react-router-dom';

export const Card = () => {

    return (
      <div 
        style={{
          backgroundImage: 'linear-gradient(#b6b6d0, #d9d9d9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexwrap: 'wrap'
        }}>
        <div
          style={{
            background: '#fefcff',
            textAlign: 'center',
            padding: 50,
            margin: 25,
            borderRadius: 8,
            width: 200,
          }}
        >
          <img src={devs} width='100%' />
          <h2
            style={{
              color: '#001781',
              marginTop: 10,
              textAlign: 'center'
            }}
          >Cadastro de Desenvolvedores</h2>
          <Link to={"/cadastrar"}>
            <button type="submit"
              style={{
                background: '#3d3f95',
                color: '#fefcff',
                fontSize: 14,
                fontWeight: 750,
                borderRadius: 8,
                padding: '12px 22px',
              }}>Cadastrar</button>
          </Link>
        </div>
        <div
          style={{
            background: '#fefcff',
            textAlign: 'center',
            padding: 50,
            margin: 25,
            borderRadius: 8,
            width: 200,
          }}
        >
          <img src={devs} width='100%' />
          <h2
            style={{
              color: '#001781',
              marginTop: 10,
              textAlign: 'center'
            }}
          >Lista de Desenvolvedores</h2>
          <Link to={"/listar"}>
            <button type="submit"
              style={{
                background: '#3d3f95',
                color: '#fefcff',
                fontSize: 14,
                fontWeight: 750,
                borderRadius: 8,
                padding: '12px 22px',
              }}>Listar</button>
          </Link>
        </div>
        <div
          style={{
            background: '#fefcff',
            textAlign: 'center',
            padding: 50,
            margin: 25,
            borderRadius: 8,
            width: 200,
          }}
        >
          <img src={devs} width='108%' />
          <h2
            style={{
              color: '#001781',
              marginTop: 10,
              textAlign: 'center'
            }}
          >Cadastro de Níveis</h2>
          <Link to={"/cadastrar_niveis"}>
            <button type="submit"
              style={{
                background: '#3d3f95',
                color: '#fefcff',
                fontSize: 14,
                fontWeight: 750,
                borderRadius: 8,
                padding: '12px 22px',
              }}>Cadastrar</button>
          </Link>
        </div>
        <div
          style={{
            background: '#fefcff',
            textAlign: 'center',
            padding: 50,
            margin: 25,
            borderRadius: 8,
            width: 200,
          }}
        >
          <img src={devs} width='100%' />
          <h2
            style={{
              color: '#001781',
              marginTop: 10,
              textAlign: 'center'
            }}
          >Lista de Níveis - Desenvolvedores</h2>
          <Link to={"/listar_niveis"}>
            <button type="submit"
              style={{
                background: '#3d3f95',
                color: '#fefcff',
                fontSize: 14,
                fontWeight: 750,
                borderRadius: 8,
                padding: '12px 22px',
              }}>Listar</button>
          </Link>
        </div>
      </div>

    )
  }
