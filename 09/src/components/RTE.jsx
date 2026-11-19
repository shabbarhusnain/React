import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTE({name,control,defaultValue="",label}) {
  return (
<div>
    {label && <label className="form-label">{label}</label>}
    <Controller
    name={name}
    control={control}
    render={({field:{onChange}})=>(
    <Editor
    apiKey="yh41bisjetddvxrk3f7lmxmfr55erecbl8shmvrbrweiraz0"
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: false,
            plugins: [
                "images","advlist","autolink","lists","link","image","charmap","preview","anchor",
                "searchreplace","visualblocks","code","fullscreen",
                "insertdatetime","media","table","code","help","wordcount"
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={onChange}
    />
  )}/>
</div>
  )
}

