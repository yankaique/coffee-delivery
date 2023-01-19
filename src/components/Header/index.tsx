import { Container } from './styles'
import { ShoppingCart } from 'phosphor-react'
import coffeeDeliveryLogo from '../../assets/coffee_delivery_icon.svg'

export function Header() {
  return (
    <Container>
      <img src={coffeeDeliveryLogo} />
      <div>
        <button>
          <ShoppingCart size={32} />
        </button>
      </div>
    </Container>
  )
}
