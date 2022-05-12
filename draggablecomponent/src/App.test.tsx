import { CanMoveFunc } from './components/CanMove'

it('CanMoveFunc correctly', () => {
    expect(CanMoveFunc(0, 0)).toBe(false)
    expect(CanMoveFunc(800, 500)).toBe(true)
})