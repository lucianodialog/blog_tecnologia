import React from "react"
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container column">
        <div className="footer-menu">
          <div className="fm-1"><a href="">Mantenha-se atualizado</a></div>
          <div className="fm-2"><a href="">Principais notícias</a></div>
          <div className="fm-3"><a href="">As melhores informações</a></div>
        </div>

        <div className="footer-area">
          <div className="footer-areaitem">
            <div className="widget">
              <div className="widget-title">
                <div className="widget-title-text">Blog tecnológico</div>
                <div className="widget-title-bar"></div>
              </div>
              <div className="widget-body">
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur sapiente blanditiis possimus quis libero tempora quos quam nihil magni ea hic quaerat, vel deleniti sequi quisquam enim quae totam.</h5>
            </div>
            </div>
          </div>
          <div className="footer-areaitem">
            <div className="widget">
              <div className="widget-title">
                <div className="widget-title-text">Últimas notícias</div>
                <div className="widget-title-bar"></div>
              </div>
              <div className="widget-body">
                <ul>
                  <li>Apple sugere carregar iPhone 12 sem usar cabo que vem na caixa
</li>
                  <li>Huawei cresce mais devagar devido às sanções dos EUA</li>
                  <li>Nintendo quer ser gigante no Brasil de novo</li>
                  <li>Spellbreak, novo battle royale da Epic, tem grande atualização</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-areaitem">
            <div className="widget">
              <div className="widget-title">
                <div className="widget-title-text">Últimos Tweets</div>
                <div className="widget-title-bar"></div>
              </div>
              <div className="widget-body">
                <ul>
                  <li>Não deixe que #cyberataques atrapalhem as estratégias da sua empresa e impactem os seus funcionários, fornecedores e clientes.</li>
                  <li>WhatsApp agora permite silenciar conversas e grupos para sempre</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copy">
          Copyrigth - Todos os direitos reservados.
      </div>

      </div>
    </footer>
  )
}

export default Footer