import { screen, render, fireEvent } from "@testing-library/react";
import ModalSearch from "../Components/Modal";

import '@testing-library/jest-dom'

describe('Testing Modal Search Component', () => {

    let onClose: jest.Mock;

    beforeEach(() => {
        onClose = jest.fn()
    })

    test('renders ModalSearch component correctly', () => {
        render(<ModalSearch onClose={onClose} />)
        expect(screen.getByPlaceholderText('Search information')).toBeInTheDocument();
        expect(screen.getByText('esc')).toBeInTheDocument();
    })

    test('links have target blank attribute', () => {
        render(<ModalSearch onClose={onClose} />)
        const tag = screen.getByText("Github account 1").closest('a')
        expect(tag).toHaveAttribute('target', '__blank')
    })

    test('change in input search', () => {
        render(<ModalSearch onClose={onClose} />)

        const searchComponent = screen.getByPlaceholderText('Search information')
        fireEvent.change(searchComponent, { target: { value: 'Github' } })
        expect(searchComponent).toHaveValue('Github')
    })

    test('filter value when search', () => {
        render(<ModalSearch onClose={onClose} />)

        const searchComponent = screen.getByPlaceholderText('Search information')
        fireEvent.change(searchComponent, { target: { value: 'Github' } })
        expect(screen.getByText('Github account 1')).toBeInTheDocument()
        expect(screen.getByText('Github account 2')).toBeInTheDocument()
        expect(screen.queryByText('Konstruksi.AI')).not.toBeInTheDocument()
    })

    test('calls onClose when the close btn is clicked', () => {
        render(<ModalSearch onClose={onClose} />)

        const closeButton = screen.getByText('esc')
        fireEvent.click(closeButton)
        expect(onClose).toHaveBeenCalledTimes(1)
    })

    test('apply the initial animation style', () => {
        render(<ModalSearch onClose={onClose} />);

        const modalDiv = screen.getByText('esc').closest('.w-screen');
        expect(modalDiv).toHaveStyle('opacity: 0');
        expect(modalDiv).toHaveStyle('filter: blur(10px)');
    });

    test('Check type icon', () => {
        render(<ModalSearch onClose={onClose} />);

        const searchComponent = screen.getByPlaceholderText('Search information').previousSibling as Element
        expect(searchComponent).toBeInTheDocument()
        if (searchComponent) {
            expect(searchComponent.tagName.toLowerCase()).toBe('svg')
        } else {
            throw new Error('component not found')
        }

    })
})