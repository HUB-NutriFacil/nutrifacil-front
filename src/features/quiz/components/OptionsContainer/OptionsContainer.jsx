import styles from './OptionsContainer.module.css';

function OptionsContainer({ items, children, onSelectionChange, selectedValue, selectionType = 'single' }) {

    const handleItemClick = (item) => {
        if (onSelectionChange) {
            onSelectionChange(item);
        }
    };

    return (
        <div className={styles.gridContainer}>
            {items.map((item) => {
                // Lógica para determinar se o item atual está selecionado
                let isSelected = false;
                if (selectionType === 'single') {
                    isSelected = selectedValue === item.id;
                } else if (selectionType === 'multiple') {
                    // Garante que selectedValue seja um array para o tipo 'multiple'
                    isSelected = Array.isArray(selectedValue) && selectedValue.includes(item.id);
                }

                return (
                    // A 'key' deve estar no elemento mais externo do loop
                    <div key={item.id} onClick={() => handleItemClick(item)}>
                        {/* Aqui está a mágica!
                          Chamamos a função 'children' que foi passada como prop,
                          entregando a ela os dados do item e se ele está selecionado.
                          Ela vai nos devolver o JSX do botão pronto.
                        */}
                        {children(item, isSelected)}
                    </div>
                );
            })}
        </div>
    );
}

export default OptionsContainer;