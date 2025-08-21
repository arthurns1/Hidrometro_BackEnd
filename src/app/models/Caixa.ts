class Caixa {
    constructor(
        private id: number,
        private altura: number,
        private largura: number,
        private ip_esp: string
    ) {}

    get get_id() {
        return this.id;
    }

    get get_altura() {
        return this.altura;
    }

    get get_largura() {
        return this.largura;
    }

    get get_ip_esp() {
        return this.ip_esp;
    }

    set set_id(id: number) {
        this.id = id;
    }

    set set_altura(altura: number) {
        this.altura = altura;
    }

    set set_largura(largura: number) {
        this.largura = largura;
    }

    set set_ip_esp(ip_esp: string) {
        this.ip_esp = ip_esp;
    }
}
