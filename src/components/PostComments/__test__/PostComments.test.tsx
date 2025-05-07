import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value:"Eu não sei o que fazer"}
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value:"Segundo comentario"}
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getAllByTestId('lista')).toHaveLength(2)

    })


});