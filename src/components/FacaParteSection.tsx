import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { IFacaParte } from "@/utils/interfaces";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FacaParteSection = ({
  title,
  text,
  facaParte,
  email,
}: {
  title?: string;
  text?: { json: Document };
  facaParte?: IFacaParte;
  email?: string;
}) => {
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {facaParte?.thumb ? (
          <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-xs">
            <Image
              src={facaParte.thumb.url}
              width={facaParte.thumb.width}
              height={facaParte.thumb.height}
              alt="Faça parte"
              className="w-full h-auto object-cover rounded-xs max-h-80"
            />
          </div>
        ) : (
          <div className="w-full md:w-1/2 shrink-0 flex items-center justify-center rounded-xs bg-gray-50 min-h-80">
            <span className="text-gray-400">Foto da equipe do LSD</span>
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {title}
            </h2>
            {text && (
              <div className="text-gray-700 leading-relaxed text-justify">
                {documentToReactComponents(text.json)}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xs bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
              >
                <Mail size={16} strokeWidth={2} />
                Falar com o laboratório
              </a>
            )}
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-xs border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Ver projetos abertos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
