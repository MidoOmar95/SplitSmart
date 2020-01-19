
export const modalAGTypes = {
    OPEN_AGMODAL: 'MOD_OPEN_AGMODAL',
    CLOSE_AGMODAL: "MOD_CLOSE_AGMODAL"
}

export const openAGModal = (type:string) => {
    return {
        payload: {
            type: type
        },
        type: modalAGTypes.OPEN_AGMODAL
    }
}

export const closeAGModal = () => {
    return {
        payload: {
        },
        type: modalAGTypes.CLOSE_AGMODAL
    }
}
