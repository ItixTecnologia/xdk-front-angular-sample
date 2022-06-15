import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '@itix/core';
import { BaseFormComponent, LayoutService } from '@itix/components';

import { PacienteModel } from '../../../models/paciente.model';
import { GerenciamentoPacientesStore } from '../../../services/stores/gerenciamento-pacientes.store';
import { PacientesFormConfig } from './pacientes.form-config';

@Component({
    selector: 'app-pacientes-form',
    templateUrl: './pacientes-form.component.html',
    styleUrls: ['./pacientes-form.component.scss'],
    providers: [
        GerenciamentoPacientesStore
    ]
})
export class PacientesFormComponent extends BaseFormComponent<PacienteModel> implements AfterViewInit {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        messageService: MessageService,
        gerenciamentoPacientesStore: GerenciamentoPacientesStore,
        layoutService: LayoutService
    ) {
        super(router, activatedRoute, gerenciamentoPacientesStore, messageService, layoutService);

        this.config = new PacientesFormConfig(gerenciamentoPacientesStore);
        this.config.setSubmitAction(this.save.bind(this), this.formGroup);
    }

    override ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this.setupSubheader(`${this.getStateTitle()} de paciente`);
    }

    override save(): void {
        super.save();
    }

    private getStateTitle(): string {
        return this.isView ? 'Visualização' : (this.isCreate ? 'Cadastro' : 'Edição');
    }
}
