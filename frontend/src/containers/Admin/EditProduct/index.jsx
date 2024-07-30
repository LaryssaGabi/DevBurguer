import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStled, LabelUpload, ErrorMessage } from "./editProduct-styler";
import api from '../../../services/api';
import ReactSelect from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { ImageUp } from 'lucide-react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();  // Obtendo o ID da URL
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    price: Yup.number().required('O preço é obrigatório').typeError('O preço deve ser um número'),
    category: Yup.object().required('A categoria é obrigatória'),
  });

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      price: '',
      category: null,
      file: null
    }
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    if (data.file.length > 0) {
        formData.append('file', data.file[0]);
    }
    formData.append('category_id', data.category.value);

    await toast.promise(
      api.put(`products/${id}`, formData),
      {
        pending: 'Editando novo produto...',
        success: 'Produto editado com sucesso',
        error: (error) => {
          const message = error.response?.data?.message || 'Erro ao editar o produto';
          return message;
        }
      }
    );

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data.map(category => ({ value: category.id, label: category.name })));
    }
    
    async function loadProduct() {
      const { data } = await api.get(`products/${id}`);
      setProduct(data);
      reset({
        name: data.name,
        price: data.price,
        category: data.category ? { value: data.category.id, label: data.category.name } : null,
        file: null
      });
    }
    
    loadCategories();
    loadProduct();
  }, [id, reset]);

  if (!product) return <p>Carregando...</p>;  // Renderiza mensagem enquanto carrega os dados

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} defaultValue={product.name}/>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} defaultValue={product.price} />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </div>

        <div>
          <LabelUpload>
            {fileName ? fileName : <><ImageUp style={{ marginRight: '8px' }} /> Carregar imagem do produto</>}
            <input type="file" accept="image/png, image/jpeg" {...register("file")} onChange={event => { setFileName(event.target.files[0]?.name); }} />
          </LabelUpload>
          {errors.file && <ErrorMessage>{errors.file.message}</ErrorMessage>}
        </div>

        <div>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => <ReactSelect {...field} options={categories} placeholder="Categorias" />}
          />
          {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
        </div>

        <ButtonStled type="submit">Adicionar produto</ButtonStled>
      </form>
    </Container>
  );
}