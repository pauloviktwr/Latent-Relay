import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DeviceService } from '../../core/services/device.service';
import { Device } from '../../core/models/device.model';

@Component({
  selector: 'app-device-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './device-form.component.html',
  styleUrl: './device-form.component.css'
})
export class DeviceFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private deviceService = inject(DeviceService);

  @Input() device?: Device;

  isEditMode = false;
  isSaving = false;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    status: ['', [Validators.required]]
  });

  ngOnInit(): void {
    if (this.device) {
      this.isEditMode = true;
      this.form.patchValue({
        name: this.device.name,
        status: this.device.status
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = {
      name: this.form.value.name!,
      status: this.form.value.status!
    };

    const request$ = this.isEditMode && this.device?.id
      ? this.deviceService.update(this.device.id, payload)
      : this.deviceService.create(payload);

    request$.subscribe({
      next: () => {
        this.successMessage = this.isEditMode
          ? 'Device atualizado com sucesso.'
          : 'Device criado com sucesso.';
        this.isSaving = false;
        this.submitted = false;
        this.form.reset();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Erro ao salvar device.';
        this.isSaving = false;
      }
    });
  }
}
