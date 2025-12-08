import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Header from '../src/components/Header.vue'

describe('header', () => {
  it('should render app name', () => {
    const wrapper = mount(Header)
    const appNameElement = wrapper.find('[data-testid="app-name"]')
    expect(appNameElement.exists()).toBe(true)
    expect(appNameElement.text()).toBe('Fullstack Template')
  })

  it('should display language toggle button', () => {
    const wrapper = mount(Header)
    const toggleButton = wrapper.find('[data-testid="language-toggle"]')
    expect(toggleButton.exists()).toBe(true)
    expect(toggleButton.text()).toBe('中文')
  })

  it('should toggle language when button is clicked', async () => {
    const wrapper = mount(Header)
    const toggleButton = wrapper.find('[data-testid="language-toggle"]')

    expect(toggleButton.text()).toBe('中文')

    await toggleButton.trigger('click')
    await wrapper.vm.$nextTick()

    expect(toggleButton.text()).toBe('EN')
  })

  it('should update app name when language changes', async () => {
    const wrapper = mount(Header)
    const toggleButton = wrapper.find('[data-testid="language-toggle"]')
    const appNameElement = wrapper.find('[data-testid="app-name"]')

    expect(appNameElement.text()).toBe('全栈模板')

    await toggleButton.trigger('click')
    await wrapper.vm.$nextTick()

    expect(appNameElement.text()).toBe('Fullstack Template')
  })
})
